package com.example.employeeapp.repository;

import com.example.employeeapp.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
    // No implementation required; Spring Data JPA handles everything
}
