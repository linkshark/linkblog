package com.linkjb.serviceuser.controller;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

/**
 * @ClassName RegistController
 * @Description TODO
 * @Author shark
 * @Data 2020/2/29 15:51
 **/
@RestController
@RequestMapping("/user/regist")
public class RegistController {
    @RequestMapping("/checkName")
    public String checkName(@RequestBody Map<String,Object> s){
        return "hello";
    }
}
