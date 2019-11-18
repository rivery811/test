package com.wego.web.garam;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Component
@AllArgsConstructor
@NoArgsConstructor
@Lazy
public class Bugs {

	private String artist, titles;

}
