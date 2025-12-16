import { useMemo } from "react";
import { useSearch } from "../context/SearchContext";

/**
 * Reusable hook for filtering lists based on global search query
 * @returns {Object} { query: string, filterByQuery: function }
 */
export function useGlobalSearch() {
  const { searchQuery } = useSearch();

  // Normalize query: trimmed and lowercase
  const query = useMemo(() => {
    return searchQuery.trim().toLowerCase();
  }, [searchQuery]);

  /**
   * Filter items by search query across specified fields
   * @param {Array} items - Array of items to filter
   * @param {Array<string|Function>} fields - Field names or accessor functions
   * @returns {Array} Filtered items
   */
  const filterByQuery = useMemo(() => {
    return (items, fields) => {
      if (!query) {
        return items;
      }

      if (!Array.isArray(items) || items.length === 0) {
        return items;
      }

      return items.filter((item) => {
        return fields.some((field) => {
          let value;

          if (typeof field === "function") {
            // Field is an accessor function
            value = field(item);
          } else {
            // Field is a string path
            value = item[field];
          }

          // Handle null/undefined
          if (value == null) {
            return false;
          }

          // Convert to string and check if includes query
          return String(value).toLowerCase().includes(query);
        });
      });
    };
  }, [query]);

  return { query, filterByQuery };
}

