


import java.util.Arrays;
import java.util.Comparator;

public class SearchTestWithDiscussion {

    public static void main(String[] args) {
        // Generate a large dataset of products
        Product[] products = new Product[10000];
        for (int i = 0; i < products.length; i++) {
            products[i] = new Product(i, "Product" + i, "Category" + (i % 5));
        }

        // Target product to search (worst-case for linear search)
        String target = "Product9999";

        System.out.println("🔎 Linear Search Analysis:");
        Product result1 = linearSearch(products, target);
        System.out.println(result1 != null ? result1 : "Product not found.");

        System.out.println("\n🔎 Binary Search Analysis:");
        Product result2 = binarySearch(products, target);
        System.out.println(result2 != null ? result2 : "Product not found.");

        // -------------------------
        // 🔍 Discussion and Recommendation
        // -------------------------
        System.out.println("\n📌 Discussion:");
        System.out.println("""
        Linear Search has a time complexity of O(n), meaning that in the worst case,
        it checks each product one by one. This is simple but inefficient for large datasets.

        Binary Search has a time complexity of O(log n), which is significantly faster
        but requires the data to be sorted.

        ✅ For an e-commerce platform where search speed is critical and the number of products is large,
        Binary Search (or even better: HashMaps or search indexes) is the more suitable option.

        ⚠️ However, Binary Search requires the product list to be sorted by the attribute being searched (e.g., productName).
        If data changes frequently, maintaining sorted order can add overhead.

        ➤ In practice, we recommend using Binary Search for performance-critical operations
        or replacing both with data structures like HashMap or a search index engine (e.g., Elasticsearch).
        """);
    }

    // Linear Search with timing
    public static Product linearSearch(Product[] products, String productName) {
        long start = System.nanoTime();
        for (Product product : products) {
            if (product.productName.equalsIgnoreCase(productName)) {
                long end = System.nanoTime();
                System.out.println("Linear Search Time: " + (end - start) + " ns");
                return product;
            }
        }
        long end = System.nanoTime();
        System.out.println("Linear Search Time: " + (end - start) + " ns");
        return null;
    }

    // Binary Search with sorting and timing
    public static Product binarySearch(Product[] products, String productName) {
        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));
        long start = System.nanoTime();

        int left = 0, right = products.length - 1;
        while (left <= right) {
            int mid = (left + right) / 2;
            int cmp = productName.compareToIgnoreCase(products[mid].productName);
            if (cmp == 0) {
                long end = System.nanoTime();
                System.out.println("Binary Search Time: " + (end - start) + " ns");
                return products[mid];
            } else if (cmp < 0) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        long end = System.nanoTime();
        System.out.println("Binary Search Time: " + (end - start) + " ns");
        return null;
    }
}
