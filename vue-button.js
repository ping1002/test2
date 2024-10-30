import { defineComponent as c, resolveComponent as s, openBlock as r, createElementBlock as m, createVNode as a, withCtx as n, renderSlot as d, createBlock as y } from "vue";
const b = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [l, i] of t)
    o[l] = i;
  return o;
}, f = {
  small: "small",
  large: "large",
  mini: "mini",
  default: null
}, k = c({
  name: "TestButton",
  emits: ["confirm"],
  props: {
    link: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: null,
      validator: (e) => e ? Object.prototype.hasOwnProperty.call(f, e) : !0
    },
    icon: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    popConfirm: {
      type: Boolean,
      default: !1
    },
    popTitle: {
      type: String,
      default: "请确认执行此操作？"
    },
    teleported: {
      type: Boolean,
      default: !0
    },
    popWidth: {
      type: Number,
      default: null
    }
  },
  setup(e, { emit: t }) {
    return {
      sizes: f,
      confirmEvent: () => {
        t("confirm");
      }
    };
  }
}), g = {
  key: 0,
  style: { width: "100%" }
};
function h(e, t, o, l, i, v) {
  const p = s("el-button"), u = s("el-popconfirm");
  return e.popConfirm ? (r(), m("span", g, [
    a(u, {
      title: e.popTitle,
      teleported: e.teleported,
      onConfirm: e.confirmEvent,
      width: e.popWidth
    }, {
      reference: n(() => [
        a(p, {
          class: "gl-button",
          size: e.size,
          type: e.type === "text" ? "" : e.type,
          link: e.type === "text" || e.link,
          disabled: e.disabled,
          icon: e.icon
        }, {
          default: n(() => [
            d(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["size", "type", "link", "disabled", "icon"])
      ]),
      _: 3
    }, 8, ["title", "teleported", "onConfirm", "width"])
  ])) : (r(), y(p, {
    key: 1,
    class: "gl-button",
    size: e.sizes[e.size],
    type: e.type === "text" ? "" : e.type,
    link: e.type === "text" || e.link,
    plain: !1,
    disabled: e.disabled,
    icon: e.icon
  }, {
    default: n(() => [
      d(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["size", "type", "link", "disabled", "icon"]));
}
const z = /* @__PURE__ */ b(k, [["render", h]]), B = [z], C = function(e) {
  B.forEach((t) => {
    console.log("come in item", t), e.component(t.name, t);
  });
}, w = { install: C };
export {
  z as TestButton,
  w as default
};
