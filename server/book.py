from server import db
from sqlalchemy.dialects.postgresql import JSON


class Book(db.Model):
    __tablename__ = 'books'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String())
    author = db.Column(db.String())
    start = db.Column(db.Date())
    end = db.Column(db.Date())

    def __init__(self, title, author, start, end):
        self.title = title
        self.author = author
        self.start = start
        self.end = end

    def __repr__(self):
        return '<id {}>'.format(self.id)