package com.wego.web.garam;

import org.springframework.stereotype.Repository;

@Repository
public interface BugsMapper {
	public void insertMusic(Bugs param);

	public String countMusic();

}
