package com.tomekswitecki.spring_backend.controller;

import com.tomekswitecki.spring_backend.repository.BookRepository;
import org.springframework.web.bind.annotation.*;
import com.tomekswitecki.spring_backend.model.Book;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class BookController {

    private final BookRepository repository;


    public BookController(BookRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/books")
    public List<Book> getBooks() {
        return repository.findAll();
    }

    @PostMapping("/books")
    public Book createBook(@RequestBody Book book) {
        return repository.save(book);
    }

    @DeleteMapping("/books/{id}")
    public void deleteBook(@PathVariable Long id) {

        repository.deleteById(id);

    }
}