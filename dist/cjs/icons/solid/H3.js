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
var H3_exports = {};
__export(H3_exports, {
  default: () => H3_default
});
module.exports = __toCommonJS(H3_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const H3Solid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M280 64C257.906 64 240 81.906 240 104V216H80V104C80 81.906 62.094 64 40 64S0 81.906 0 104V408C0 430.094 17.906 448 40 448S80 430.094 80 408V296H240V408C240 430.094 257.906 448 280 448S320 430.094 320 408V104C320 81.906 302.094 64 280 64ZM538.115 209.062L613.096 131.875C624.297 120.344 627.516 103.219 621.252 88.437C614.986 73.625 600.486 64 584.41 64H408.014C385.922 64 368.016 81.906 368.016 104S385.922 144 408.014 144H489.807L415.436 220.562C404.232 232.094 401.029 249.219 407.279 264C413.545 278.812 428.043 288.438 444.121 288.438H526.35C544.912 288.438 560.004 306.281 560.004 328.219S544.912 368 526.35 368H460.025C454.059 368 448.512 363.031 446.246 355.625C439.746 334.531 417.342 322.656 396.232 329.187C375.125 335.687 363.281 358.062 369.781 379.187C382.469 420.344 418.732 448 460.025 448H526.35C589.02 448 640 394.281 640 328.219C640 266.344 595.268 215.281 538.115 209.062Z" })
  }
));
H3Solid.displayName = "H3Solid";
var H3_default = H3Solid;
