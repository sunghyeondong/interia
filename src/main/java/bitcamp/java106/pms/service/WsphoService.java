package bitcamp.java106.pms.service;

import java.util.HashMap;

import bitcamp.java106.pms.domain.Wspho;

public interface WsphoService {
    int add(Wspho wspho, HashMap<String, Object> jsonData);
}
