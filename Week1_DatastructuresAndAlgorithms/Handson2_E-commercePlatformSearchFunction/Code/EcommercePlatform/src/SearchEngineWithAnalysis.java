

import java.util.Arrays;
import java.util.Comparator;

public class SearchEngineWithAnalysis {

    // Linear Search with time measurement
    public static Product linearSearch(Product[] products, String productName) {
        long startTime = System.nanoTime();
        for (Product product : products) {
            if (product.productName.equalsIgnoreCase(productName)) {
                long endTime = System.nanoTime();
                System.out.println("Linear Search Time: " + (endTime - startTime) + " ns");
                return product;
            }
        }
        long endTime = System.nanoTime();
        System.out.println("Linear Search Time: " + (endTime - startTime) + " ns");
        return null;
    }

    // Binary Search with time measurement
    public static Product binarySearch(Product[] products, String productName) {
        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));
        long startTime = System.nanoTime();

        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;
            int compare = productName.compareToIgnoreCase(products[mid].productName);

            if (compare == 0) {
                long endTime = System.nanoTime();
                System.out.println("Binary Search Time: " + (endTime - startTime) + " ns");
                return products[mid];
            } else if (compare < 0) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        long endTime = System.nanoTime();
        System.out.println("Binary Search Time: " + (endTime - startTime) + " ns");
        return null;
    }
}
