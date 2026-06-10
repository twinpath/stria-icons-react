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
var ClapperboardPlay_exports = {};
__export(ClapperboardPlay_exports, {
  default: () => ClapperboardPlay_default
});
module.exports = __toCommonJS(ClapperboardPlay_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ClapperboardPlayRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V96C512 60.654 483.346 32 448 32ZM254.062 80H321.938L241.938 160H174.062L254.062 80ZM48 126.062L94.062 80H161.938L81.938 160H48V126.062ZM464 416C464 424.822 456.822 432 448 432H64C55.178 432 48 424.822 48 416V208H464V416ZM464 97.938L401.938 160H334.062L414.062 80H448C456.822 80 464 87.178 464 96V97.938ZM218.666 400C220.625 400 222.604 399.439 224.312 398.318L330.979 329.35C334.104 327.334 336 323.801 336 319.996S334.104 312.656 330.979 310.643L224.312 241.674C221.062 239.539 216.875 239.453 213.5 241.371C210.104 243.322 208 247.018 208 251.027V388.965C208 392.973 210.104 396.67 213.5 398.621C215.104 399.535 216.896 400 218.666 400Z" })
  }
));
ClapperboardPlayRegular.displayName = "ClapperboardPlayRegular";
var ClapperboardPlay_default = ClapperboardPlayRegular;
