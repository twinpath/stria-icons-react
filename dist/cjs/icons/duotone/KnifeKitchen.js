var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var KnifeKitchen_exports = {};
__export(KnifeKitchen_exports, {
  default: () => KnifeKitchen_default
});
module.exports = __toCommonJS(KnifeKitchen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const KnifeKitchenDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M291.881 194.744L4.888 469.862C-3.862 478.236 -0.362 492.486 11.388 496.361C125.26 532.86 250.757 504.361 335.63 422.488L421.003 341.74C427.503 335.49 427.503 325.366 421.003 319.116L291.881 194.744Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M566.369 43.249L531.245 9.375C518.245 -3.125 497.245 -3.125 484.246 9.375L292 194.744L403.997 302.866L438.372 275.117C444.622 269.117 448.122 260.993 448.122 252.493V207.994L566.369 88.622C579.369 76.123 579.369 55.748 566.369 43.249ZM443.43 155.308C437.175 161.558 427.069 161.558 420.814 155.308C414.558 149.058 414.558 138.934 420.814 132.684C427.069 126.434 437.175 126.434 443.43 132.684C449.686 138.934 449.686 149.058 443.43 155.308ZM507.429 91.31C501.173 97.56 491.068 97.56 484.812 91.31C478.556 85.06 478.556 74.935 484.812 68.686C491.068 62.436 501.173 62.436 507.429 68.686S513.685 85.185 507.429 91.31Z" })
    ]
  }
));
KnifeKitchenDuotone.displayName = "KnifeKitchenDuotone";
var KnifeKitchen_default = KnifeKitchenDuotone;
