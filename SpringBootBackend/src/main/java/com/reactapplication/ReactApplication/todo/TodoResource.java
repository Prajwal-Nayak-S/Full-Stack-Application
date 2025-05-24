package com.reactapplication.ReactApplication.todo;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.reactapplication.ReactApplication.repository.TodoRepository;

@RestController
public class TodoResource {

	TodoRepository todoRepository;
	
public TodoResource(TodoRepository todoRepository) {
	super();
	this.todoRepository = todoRepository;
}
@GetMapping("/users/{name}/todos")
public List<Todo> retriveTodos(@PathVariable String name){
	List<Todo> todos=todoRepository.findByUsername(name);
	return todos;
	
}
@GetMapping("/users/{name}/todos/{id}")
public Todo retriveTodo( @PathVariable String name,@PathVariable int id) {
	return todoRepository.findById(id).get();
	
}   

@DeleteMapping("users/{name}/todos/{id}")
public ResponseEntity<Object> deleteUser(@PathVariable int id,@PathVariable String name){
	todoRepository.deleteById(id);
	return ResponseEntity.noContent().build();
}

@PutMapping("users/{username}/todos/{id}")
public Todo updateTodo(@PathVariable String username,@PathVariable int id,@RequestBody Todo todo) {
	todoRepository.save(todo);
	return todo;
}  

@PostMapping("users/{username}/todos")
public Todo createTodo(@PathVariable String username,@RequestBody Todo todo) {
	todo.setUsername(username);
	todo.setId(null);
	return todoRepository.save(todo);

}

}
