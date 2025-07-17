package com.cognizant.api_gateway.filter;

import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.core.Ordered;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.server.ServerWebExchange;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;

@Component
public class LogFilter implements GlobalFilter, Ordered {

    private static final Logger Logger = LoggerFactory.getLogger(LogFilter.class);

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        String path = exchange.getRequest().getURI().getPath();
        Logger.info("✅ Incoming Request URI: " + path);
        return chain.filter(exchange);
    }

    @Override
    public int getOrder() {
        return 0; // highest priority
    }
}
