package com.tomekswitecki.spring_backend.repository;

import com.tomekswitecki.spring_backend.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository
        extends JpaRepository<Book, Long> {

}