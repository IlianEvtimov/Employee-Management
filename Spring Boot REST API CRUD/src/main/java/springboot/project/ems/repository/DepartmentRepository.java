package springboot.project.ems.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import springboot.project.ems.entity.Department;

public interface DepartmentRepository extends JpaRepository<Department, Long> {
}
