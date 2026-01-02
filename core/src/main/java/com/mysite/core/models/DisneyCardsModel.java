package com.mysite.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class DisneyCardsModel {

    @ValueMapValue
    private String heading;

    @ValueMapValue
    private String componentDescription;

    @ChildResource(name = "cards")
    private Resource cardsResource;

    private List<Map<String, Object>> cardList;

    @PostConstruct
    protected void init() {
        cardList = new ArrayList<>();
        if (cardsResource != null) {
            for (Resource card : cardsResource.getChildren()) {
                // Each child of the multifield is added as a Map of its properties
                cardList.add(card.getValueMap());
            }
        }
    }

    public String getHeading() {
        return heading;
    }

    public String getComponentDescription() {
        return componentDescription;
    }

    public List<Map<String, Object>> getCardList() {
        return cardList;
    }
}