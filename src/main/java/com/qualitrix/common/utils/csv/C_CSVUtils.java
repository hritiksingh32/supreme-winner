package com.qualitrix.common.utils.csv;

import java.io.IOException;

import static java.lang.System.out;

public class C_CSVUtils implements CSVUtils {

    CSVManager csvManager;

    public C_CSVUtils() {
        this.csvManager = new CSVManager();
    }

    @Override
    public String getValue(String csvFilePath, int row, int col) throws IOException {
        return this.csvManager.getValue(csvFilePath, row, col);
    }

    @Override
    public boolean setValue(String csvFilePath, int row, int col, String newText) throws Exception {
        return this.csvManager.setValue(csvFilePath, row, col, newText);
    }

    public static void main(String[] args) throws Exception {
        String value = new C_CSVUtils()
            .getValue("C:\\Users\\admin\\Desktop\\web_baseline_framework\\testdata\\Sample100.csv",
                    1, 2);
        out.println("Value: " + value);

        new C_CSVUtils()
            .setValue("C:\\Users\\admin\\Desktop\\web_baseline_framework\\testdata\\Sample100.csv",
                    2,2, "I am New Value");

        String newValue = new C_CSVUtils()
            .getValue("C:\\Users\\admin\\Desktop\\web_baseline_framework\\testdata\\Sample100.csv",
                    2, 2);
        out.println("New Value: " + newValue);
    }
}
