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
var BookOpenCover_exports = {};
__export(BookOpenCover_exports, {
  default: () => BookOpenCover_default
});
module.exports = __toCommonJS(BookOpenCover_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BookOpenCoverDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M64 32.404V356.38L304 416V40.02L100.895 0.388C81.502 -2.649 64 12.537 64 32.404ZM539.105 0.388L336 40.02V416L576 356.38V32.404C576 12.537 558.498 -2.649 539.105 0.388Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M313.058 511.238L25.058 447.242C10.417 443.988 0 431.003 0 416.005V64.015C0 43.197 19.564 27.922 39.761 32.971L64 39.031V364.663C64 379.661 74.417 392.646 89.058 395.9L320 447.22L550.942 395.9C565.583 392.646 576 379.661 576 364.663V39.031L600.239 32.971C620.436 27.922 640 43.197 640 64.015V416.005C640 431.003 629.583 443.988 614.942 447.242L326.942 511.238C322.37 512.254 317.63 512.254 313.058 511.238Z" })
    ]
  }
));
BookOpenCoverDuotone.displayName = "BookOpenCoverDuotone";
var BookOpenCover_default = BookOpenCoverDuotone;
