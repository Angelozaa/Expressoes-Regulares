# Expressoes-Regulares


---------------------------------------- Nome --------------------------------------------------

^ = indica o início da string.
[a-zA-ZÀ-ú\s'] = corresponde a qualquer caractere alfabético (maiúsculo ou minúsculo).
{1,100} = especifica que o nome deve ter entre 1 e 100 caracteres.
$ = final da string.

---------------------------------------- E mail ------------------------------------------------

[^\s@]+ = um ou mais caracteres que não são espaços em branco (\s) nem @.
@ = corresponde a '@'.

---------------------------------------- Telefone ----------------------------------------------

[0-9]{2} = corresponde a exatamente dois dígitos de 0 a 9.
\s = corresponde a um único espaço em branco.
[0-9]{4,5} = corresponde a quatro ou cinco dígitos de 0 a 9.
-  = corresponde ao caractere '-'.
[0-9]{4} = corresponde a exatamente quatro dígitos de 0 a 9.
