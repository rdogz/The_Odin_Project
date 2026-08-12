function capitalize(strr) {
    
    strr = strr.toLowerCase();

    strr = strr.replace(strr.charAt(0), strr.charAt(0).toUpperCase());
    
    return strr;
}
