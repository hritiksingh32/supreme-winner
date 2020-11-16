package com.qualitrrix.test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.testng.annotations.Test;

import com.qualitrix.annotation.values.Author;
import com.qualitrix.common.utils.AssertUtils;

public class Assetion_validation {

	AssertUtils assertUtil = new AssertUtils();
	List<String> original = Arrays.asList("Mango", "Apple", "Banana", "Grapes");
	List<String> different = Arrays.asList("Red", "Blue", "Pink", "Orange");
	List<String> copied_list = new ArrayList<String>(original);

	@Author(name = "Abhinav")
	@Test()
	public void assetion_validation_positive() {

		System.out.println("Unit test-1 starts ");
		assertUtil.assertListEquals(original, copied_list, "list1");
		assertUtil.assertListContains(original, copied_list, "list2");
		assertUtil.assertListEqualsWithOrder(original, copied_list, "list3");
		assertUtil.assertListNotContains(original, different, "list4");
		System.out.println("Unit test-1 ends ");

	}

	@Author(name = "Abhinav")
	@Test()
	public void assetion_validation_negative_1() {

		System.out.println("Unit test-2 starts ");
		assertUtil.assertListEquals(original, different, "list5");
		System.out.println("Unit test-2 ends ");

	}

	@Author(name = "Abhinav")
	@Test()
	public void assetion_validation_negative_2() {

		System.out.println("Unit test-3 starts ");
		assertUtil.assertListContains(original, different, "list6");
		System.out.println("Unit test-3 ends ");

	}

	@Author(name = "Abhinav")
	@Test()
	public void assetion_validation_negative_3() {

		System.out.println("Unit test-4 starts ");
		assertUtil.assertListEqualsWithOrder(original, different, "list7");
		System.out.println("Unit test-4 ends ");

	}

	@Author(name = "Abhinav")
	@Test()
	public void assetion_validation_negative_4() {

		System.out.println("Unit test-5 starts ");
		assertUtil.assertListNotContains(original, copied_list, "list8");
		System.out.println("Unit test-5 ends ");

	}

}
