function potencia(base, exponente) {
    if (exponente == 1)
        return base;
    else
        return base * potencia(base,exponente-1);
}