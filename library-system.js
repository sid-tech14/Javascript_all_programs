class Library {
      book_price ;
    constructor(book_id, book_name, book_cat, stud_book, book_price) {
        this.book_id = book_id;
        this.book_name = book_name;
        this.book_cat = book_cat;
        this.stud_book = stud_book;
        this.book_price = book_price;

    }
    getBook() {

        return (this.book_name)

    }


}

let book1 = new Library(0123, 'OOPS', 'IT. Textbook', 'false')
let book2 = new Library(0124, 'The Lord Of The Rings', 'Novel', 'true')
let book3 = new Library(0125, 'Middlemarch', 'Novel', 'true')

class Staff extends Library {
    constructor(staff_id, staff_name, staff_design) {
        this.staff_id = staff_id;
        this.staff_name = staff_name;
        this.staff_design = staff_design;
    }

}

class Student extends Library {
    constructor(stud_id, stud_name, stud_class) {
        this.stud_id = stud_id;
        this.stud_name = stud_name;
        this.stud_class = stud_class;
    }

}

console.log(book1.getBook());

