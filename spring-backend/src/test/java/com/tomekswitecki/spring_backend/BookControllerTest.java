package com.tomekswitecki.spring_backend;
import com.tomekswitecki.spring_backend.model.Book;
import com.tomekswitecki.spring_backend.controller.BookController;
import com.tomekswitecki.spring_backend.repository.BookRepository;
import org.junit.jupiter.api.MediaType;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.webmvc.test.autoconfigure.WebMvcTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;

//class SimpleTest {
//    @Test
//    void shouldPass() {
//        assertEquals(2, 1 + 1);
//    }
//}

//JUnit – framework do testów
//Mockito – tworzenie atrap (mocków)
//MockMvc – symulacja żądań HTTP

@WebMvcTest(BookController.class)
class BookControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private BookRepository repository;

    @Test
    void getBooksShouldReturn200() throws Exception {

        mockMvc.perform(get("/books"))
                .andExpect(status().isOk());


    }

    // Spring Boot endpoint  testing. Repository layer mock, to get accuracy of the responses from controllers.

    @Test
    void getBooksShouldReturnBookList() throws Exception {

        Book book = new Book();
        book.setId(1L);
        book.setTitle("Harry Potter");
        book.setAuthor("J.K. Rowling");
        book.setIsbn("123456789");
        book.setPages(300);
        book.setRating(5);

        when(repository.findAll())
                .thenReturn(List.of(book));

        mockMvc.perform(get("/books"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].title").value("Harry Potter"))
                .andExpect(jsonPath("$[0].author").value("J.K. Rowling"))
                .andExpect(jsonPath("$[0].pages").value(300))
                .andExpect(jsonPath("$[0].rating").value(5));
    }


}
