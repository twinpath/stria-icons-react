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
var Tablets_exports = {};
__export(Tablets_exports, {
  default: () => Tablets_default
});
module.exports = __toCommonJS(Tablets_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TabletsSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M159.952 192C78.848 192 12.491 250.5 0.118 326.75C-0.757 331.5 3.368 336 8.366 336H311.663C316.661 336 320.659 331.5 319.911 326.75C307.413 250.5 241.055 192 159.952 192ZM311.538 368H8.366C3.368 368 -0.757 372.5 0.118 377.25C12.491 453.5 78.848 512 159.952 512S307.413 453.5 319.786 377.25C320.659 372.5 316.536 368 311.538 368ZM362.934 65.742C359.432 62.24 353.43 62.49 350.68 66.492C305.161 129.254 310.163 216.896 366.561 273.406C423.083 329.918 510.741 334.795 573.516 289.285C577.518 286.41 577.768 280.408 574.266 277.033L362.934 65.742ZM593.399 46.613C536.878 -9.898 449.217 -14.773 386.444 30.609C382.442 33.486 382.192 39.486 385.694 42.861L597.026 254.277C600.526 257.779 606.53 257.529 609.28 253.527C654.797 190.766 649.921 103.123 593.399 46.613Z" })
  }
));
TabletsSolid.displayName = "TabletsSolid";
var Tablets_default = TabletsSolid;
