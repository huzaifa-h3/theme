# theme
{% assign current_variant = product.selected_or_first_available_variant %}

<form method="post" action="/cart/add" id="add-to-cart-form">
  <input type="hidden" name="id" value="{{ current_variant.id }}" class="selected-variant-id">

  {% for option in product.options_with_values %}
    <fieldset class="variant-option">
      <legend>{{ option.name }}</legend>
      <div class="variant-values">
        {% for value in option.values %}
          <label class="variant-box">
            <input 
              type="radio" 
              name="option-{{ option.name | handleize }}" 
              value="{{ value }}" 
              {% if option.selected_value == value %}checked{% endif %} 
            >
            <span>{{ value }}</span>
          </label>
        {% endfor %}
      </div>
    </fieldset>
  {% endfor %}

  <button type="submit" class="add-to-cart-btn">Add to Cart</button>
</form>
