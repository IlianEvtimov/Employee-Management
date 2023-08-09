package springboot.project.ems.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import springboot.project.ems.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
