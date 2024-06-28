import os
import psycopg2

conn = psycopg2.connect(
    dbname=os.getenv('DB_NAME'),
    user=os.getenv('DB_USER'),
    password=os.getenv('DB_PASSWORD'),
    host=os.getenv('DB_HOST'))

cur = conn.cursor()

cur.execute('CREATE TABLE IF NOT EXISTS hotels (id serial PRIMARY KEY, name varchar, address varchar, price int, rating float, image varchar)')

# Define the data to be inserted as a tuple of tuples
hotels_data = [
    ('The Grand Hotel', '123 Main St, Metropolis', 200, 4.5, 'https://via.placeholder.com/300'),
    ('Oceanview Inn', '456 Ocean Ave, Seaview', 150, 4.2, 'https://via.placeholder.com/300'),
    ('Mountain Retreat', '789 Mountain Rd, Hilltop', 180, 4.8, 'https://via.placeholder.com/300'),
    ('City Lights Hotel', '101 City Center, Downtown', 220, 4.6, 'https://via.placeholder.com/300'),
    ('Lakeside Resort', '202 Lake Dr, Lakeside', 175, 4.3, 'https://via.placeholder.com/300'),
    ('Desert Oasis', '303 Desert Blvd, Sands', 160, 4.4, 'https://via.placeholder.com/300'),
    ('Forest Hideaway', '404 Forest Ln, Greenwoods', 190, 4.7, 'https://via.placeholder.com/300'),
    ('Urban Comfort', '505 Urban St, Metropolis', 210, 4.5, 'https://via.placeholder.com/300'),
    ('Beachfront Paradise', '606 Beach Dr, Shoreline', 230, 4.9, 'https://via.placeholder.com/300'),
    ('Country Inn', '707 Country Rd, Countryside', 140, 4.1, 'https://via.placeholder.com/300')
]

# Execute the insert query with the data
cur.executemany('INSERT INTO hotels (name, address, price, rating, image) VALUES (%s, %s, %s, %s, %s)', hotels_data)

conn.commit()
cur.close()
conn.close()
