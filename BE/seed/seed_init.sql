INSERT INTO anointed.public."Document" (id, name, description, "pathImg", "pathFile") VALUES
(1, 'SQL e PostgreSQL', 'Appunti su SQL e PostgreSQL', '/images/1.png', '/doc/Corso_SQL_e_PostgreSQL.pdf'),
(2, 'Node.js e Express.js', 'Appunti su Node.js e Express.js', '/images/2.png', '/doc/Corso_Node_ed_Express.pdf'),
(3, 'Sequelize', 'Appunti sull''ORM Sequelize', '/images/3.png', '/doc/Corso_Sequelize.pdf'),
(4, 'MongoDB', 'Appunti sul DBMS MongoDB', '/images/4.png', '/doc/Corso_MongoDB.pdf'),
(5, 'Tailwind CSS', 'Appunti sul framework CSS Tailwind', '/images/5.png', '/doc/Corso_Tailwind.pdf'),
(6, 'TypeScript', 'Appunti sul superset di JS, TypeScript', '/images/6.png', '/doc/Corso_TypeScript.pdf'),
(7, 'Angular', 'Appunti sul framework Angular', '/images/7.png', '/doc/Corso_Angular.pdf'),
(8, 'Prisma ORM', 'Appunti sull'' ORM Prisma', '/images/8.png', '/doc/Corso_Prisma.pdf'),
(9, 'GraphQL', 'Appunti sul query language GraphQL', '/images/9.png', '/doc/Corso_GraphQL.pdf'),
(10, 'Figma', 'Appunti sul prototipatore Figma', '/images/10.png', '/doc/Corso_Figma.pdf'),
(11, 'Angular Material UI', 'Appunti su Angular Material UI', '/images/11.png', '/doc/Corso_Angular_Material_UI.pdf'),
(12, 'Python - Beta', 'Appunti sul linguaggio Python (...in corso)', '/images/12.png', '/doc/Corso_Python.pdf'),
(13, 'ElectronJs', 'Appunti sul framework desktop ElectronJs', '/images/13.png', '/doc/Corso_ElectronJs.pdf'),
(14, 'Git', 'Appunti sul sistema di versionamento Git', '/images/14.png', './doc/Git_Sheet.pdf'),
(15, 'React', 'Appunti su React', '/images/15.png', '/doc/Corso_React.pdf'),
(16, 'Dart', 'Appunti su Dart', '/images/16.png', '/doc/Corso_Dart.pdf'),
(17, 'Docker', 'Appunti su Docker', '/images/17.png', '/doc/Corso_Docker.pdf'),
(18, 'Sistemi e Reti', 'Appunti su Sistemi e Reti (...in corso)', '/images/18.png', '/doc/Corso_Sistemi_Reti.pdf')
ON CONFLICT (id) DO NOTHING;

INSERT INTO anointed.public."Categories" (description) VALUES
('database'),
('back-end'),
('front-end'),
('other')

-- Documento 1 → database
INSERT INTO anointed.public."DocumentCategories"  ("documentId", "categoryId")
SELECT 1, c.id FROM anointed.public."Categories" c WHERE c.description = 'database';

-- Documento 2 → back-end
INSERT INTO anointed.public."DocumentCategories" ("documentId", "categoryId")
SELECT 2, c.id FROM anointed.public."Categories" c WHERE c.description = 'back-end';

-- Documento 3 → back-end, database
INSERT INTO anointed.public."DocumentCategories" ("documentId", "categoryId")
SELECT 3, c.id FROM anointed.public."Categories" c WHERE c.description = 'back-end';
INSERT INTO anointed.public."DocumentCategories" ("documentId", "categoryId")
SELECT 3, c.id FROM anointed.public."Categories" c WHERE c.description = 'database';

-- Documento 4 → database
INSERT INTO anointed.public."DocumentCategories" ("documentId", "categoryId")
SELECT 4, c.id FROM anointed.public."Categories" c WHERE c.description = 'database';

-- Documento 5 → front-end
INSERT INTO anointed.public."DocumentCategories" ("documentId", "categoryId")
SELECT 5, c.id FROM anointed.public."Categories" c WHERE c.description = 'front-end';

-- Documento 6 → front-end, back-end
INSERT INTO anointed.public."DocumentCategories" ("documentId", "categoryId")
SELECT 6, c.id FROM anointed.public."Categories" c WHERE c.description = 'front-end';
INSERT INTO anointed.public."DocumentCategories" ("documentId", "categoryId")
SELECT 6, c.id FROM anointed.public."Categories" c WHERE c.description = 'back-end';

-- Documento 7 → front-end
INSERT INTO anointed.public."DocumentCategories" ("documentId", "categoryId")
SELECT 7, c.id FROM anointed.public."Categories" c WHERE c.description = 'front-end';

-- Documento 8 → back-end, database
INSERT INTO anointed.public."DocumentCategories" ("documentId", "categoryId")
SELECT 8, c.id FROM anointed.public."Categories" c WHERE c.description = 'back-end';
INSERT INTO anointed.public."DocumentCategories" ("documentId", "categoryId")
SELECT 8, c.id FROM anointed.public."Categories" c WHERE c.description = 'database';

-- Documento 9 → back-end
INSERT INTO anointed.public."DocumentCategories" ("documentId", "categoryId")
SELECT 9, c.id FROM anointed.public."Categories" c WHERE c.description = 'back-end';

-- Documento 10 → other
INSERT INTO anointed.public."DocumentCategories" ("documentId", "categoryId")
SELECT 10, c.id FROM anointed.public."Categories" c WHERE c.description = 'other';

-- Documento 11 → front-end
INSERT INTO anointed.public."DocumentCategories" ("documentId", "categoryId")
SELECT 11, c.id FROM anointed.public."Categories" c WHERE c.description = 'front-end';

-- Documento 12 → back-end
INSERT INTO anointed.public."DocumentCategories" ("documentId", "categoryId")
SELECT 12, c.id FROM anointed.public."Categories" c WHERE c.description = 'back-end';

-- Documento 13 → front-end, other
INSERT INTO anointed.public."DocumentCategories" ("documentId", "categoryId")
SELECT 13, c.id FROM anointed.public."Categories" c WHERE c.description = 'front-end';
INSERT INTO anointed.public."DocumentCategories" ("documentId", "categoryId")
SELECT 13, c.id FROM anointed.public."Categories" c WHERE c.description = 'other';

-- Documento 14 → other
INSERT INTO anointed.public."DocumentCategories" ("documentId", "categoryId")
SELECT 14, c.id FROM anointed.public."Categories" c WHERE c.description = 'other';

-- Documento 15 → front-end
INSERT INTO anointed.public."DocumentCategories" ("documentId", "categoryId")
SELECT 15, c.id FROM anointed.public."Categories" c WHERE c.description = 'front-end';

-- Documento 16 → back-end, front-end
INSERT INTO anointed.public."DocumentCategories" ("documentId", "categoryId")
SELECT 16, c.id FROM anointed.public."Categories" c WHERE c.description = 'back-end';
INSERT INTO anointed.public."DocumentCategories" ("documentId", "categoryId")
SELECT 16, c.id FROM anointed.public."Categories" c WHERE c.description = 'front-end';

-- Documento 17 → back-end, other
INSERT INTO anointed.public."DocumentCategories" ("documentId", "categoryId")
SELECT 17, c.id FROM anointed.public."Categories" c WHERE c.description = 'back-end';
INSERT INTO anointed.public."DocumentCategories" ("documentId", "categoryId")
SELECT 17, c.id FROM anointed.public."Categories" c WHERE c.description = 'other';

-- Documento 18 → other
INSERT INTO anointed.public."DocumentCategories" ("documentId", "categoryId")
SELECT 18, c.id FROM anointed.public."Categories" c WHERE c.description = 'other';
