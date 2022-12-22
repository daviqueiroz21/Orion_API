CREATE DATABASE orionMarket;

CREATE TABLE usuarios (
    id serial primary key,
    nome varchar(40) NOT NULL,
    email varchar(100) NOT NULL,
    senha text NOT NULL,
    CPF bigint,
    endereco text,
    foto text
    isActive bool NOT NULL
);

CREATE TABLE lojas (
    id serial primary key,
    nome varchar(150) NOT NULL,
    email varchar(100) NOT NULL,
    senha text NOT NULL,
    CNPJ bigint NOT NULL,
    CEP int NOT NULL,
    endereco text NOT NULL,
    foto text NOT NULL,
    Link varchar(50) NOT NULL,
    isActive boolean NOT NULL);

CREATE TABLE categorias (
    id serial primary key,
    nome varchar(50) NOT NULL,
    foto text NOT NULL
);

CREATE TABLE produtos(
    id serial primary key,
    nome varchar(200) NOT NULL,
    categoria_id int FOREIGN KEY REFERENCES categorias(id),
    descricao text NOT NULL,
    valor float NOT NULL,
    estoque int NOT NULL,
    foto text NOT NULL,
    vendidos int,
    loja_id int FOREIGN KEY REFERENCES lojas(id)
);
