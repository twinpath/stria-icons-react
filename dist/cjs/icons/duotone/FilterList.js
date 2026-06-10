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
var FilterList_exports = {};
__export(FilterList_exports, {
  default: () => FilterList_default
});
module.exports = __toCommonJS(FilterList_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FilterListDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 384H352C334.327 384 320 398.327 320 416V416C320 433.673 334.327 448 352 448H480C497.673 448 512 433.673 512 416V416C512 398.327 497.673 384 480 384ZM480 224H352C334.327 224 320 238.327 320 256V256C320 273.673 334.327 288 352 288H480C497.673 288 512 273.673 512 256V256C512 238.327 497.673 224 480 224ZM480 64H448C430.327 64 416 78.327 416 96V96C416 113.673 430.327 128 448 128H480C497.673 128 512 113.673 512 96V96C512 78.327 497.673 64 480 64Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M346.93 99.877L224 244.635V429.986C224 444.625 207.523 453.016 195.687 444.73L135.689 402.742C130.859 399.379 128 393.871 128 388V244.635L5.07 99.877C-6.85 85.5 3.582 64 22.482 64H329.518C348.416 64 358.85 85.5 346.93 99.877Z" })
    ]
  }
));
FilterListDuotone.displayName = "FilterListDuotone";
var FilterList_default = FilterListDuotone;
