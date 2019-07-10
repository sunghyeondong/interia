package bitcamp.java106.pms.service;

public interface FacebookService {
    <T> T me(String accessToken, Class<T> type);
}
