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
var PersonFromPortal_exports = {};
__export(PersonFromPortal_exports, {
  default: () => PersonFromPortal_default
});
module.exports = __toCommonJS(PersonFromPortal_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PersonFromPortalRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M368.125 96C394.625 96 416.125 74.5 416.125 48S394.625 0 368.125 0S320.125 21.5 320.125 48S341.625 96 368.125 96ZM488 240L439.625 239.875C436.125 239.875 433 237.5 432 234.125L418.125 188.75C408.875 158.5 384.125 135.625 353.25 128.625L275 110.875C249.375 105 222.5 111 201.75 127.125L185 140C174.375 63.125 149.375 0 96 0C52.25 0 0 44.375 0 256C0 372.75 16.625 512 96 512C120.625 512 147.875 497.875 167.125 448H114.5C108.75 458.25 102.5 464 96 464C69.5 464 48 370.875 48 256S69.5 48 96 48S144 141.125 144 256C144 297.5 141 335.625 136.25 368H120C106.75 368 96 378.75 96 392S106.75 416 120 416H195C217.375 416 237.625 402.625 246.5 382L260 350.5L250.375 344.625C239 337.625 229.375 328.125 222.125 316.875L202.25 363.125C201 366.125 198.125 368 195 368H185.5C189.625 337.125 192 300.5 192 256C192 236.5 191.5 216.5 190.375 196.625L231.125 165C240.625 157.75 252.875 155.125 264.5 157.625L279.375 161L244 248.375C233.625 273.875 243.375 303.125 267 317.25L350.75 367.875C353.125 369.5 354.5 372 354.625 374.75C354.625 375.5 354.5 376.25 354.375 377L321 481.375C319.25 487.5 320 494.125 323.125 499.625C326.25 505.25 331.375 509.375 337.5 511.125C339.75 511.625 341.875 512 344.125 512C354.875 512 364.25 504.875 367.25 494.625L400.5 390.125C407.5 365.75 397.25 339.875 375.625 326.75L323.75 295.5L365.75 190.75C368.5 194.25 370.75 198.375 372.125 202.75L386.125 248.125C393.125 271.75 414.875 287.875 439.5 287.875L487.875 288H488C501.25 288 512 277.25 512 264C512 250.75 501.25 240 488 240Z" })
  }
));
PersonFromPortalRegular.displayName = "PersonFromPortalRegular";
var PersonFromPortal_default = PersonFromPortalRegular;
