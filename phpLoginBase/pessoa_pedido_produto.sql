create table pessoa_pedido_produto(
    idPedido int PRIMARY key AUTO_INCREMENT,
    fk_idPessoa int,
    fk_idProduto int,
    quantityProduto int not null,
    dataPedido datetime DEFAULT now(),
    FOREIGN key(fk_idPessoa) REFERENCES pessoa(id),
    FOREIGN key(fk_idProduto) REFERENCES produto(idProduto)
    );




create table pessoa_pedido_produto(
    id int PRIMARY key AUTO_INCREMENT,
    fk_idPedido int not null,
    fk_idPessoa int not null,
    fk_idProduto int not null,
    quantityProduto int not null,
    dataPedido datetime DEFAULT now(),
    FOREIGN key(fk_idPedido) REFERENCES pedido(idPedido),
    FOREIGN key(fk_idPessoa) REFERENCES pessoa(id),
    FOREIGN key(fk_idProduto) REFERENCES produto(idProduto)
  );