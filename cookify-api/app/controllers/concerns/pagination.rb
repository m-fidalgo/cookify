module Pagination
  extend ActiveSupport::Concern

  DEFAULT_LIMIT = 20
  DEFAULT_OFFSET = 0


  def render_paginated(items, root, serializer)
    paginated_items = paginate(items)

    render json: {
      "#{root}": ActiveModel::Serializer::CollectionSerializer.new(
        paginated_items,
        serializer: serializer,
      ),
      total: items.count,
    }
  end


  private def paginate(items)
    items.limit(limit).offset(offset)
  end


  private def limit
    params[:limit].present? ? params[:limit].to_i : DEFAULT_LIMIT
  end


  private def offset
    params[:offset].present? ? params[:offset].to_i : DEFAULT_OFFSET
  end
end
