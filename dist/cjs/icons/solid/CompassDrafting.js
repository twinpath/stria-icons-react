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
var CompassDrafting_exports = {};
__export(CompassDrafting_exports, {
  default: () => CompassDrafting_default
});
module.exports = __toCommonJS(CompassDrafting_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CompassDraftingSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M457 344.363C432 364.738 404.375 381.612 374.5 393.487L428.875 487.608L482.75 510.733C492.625 514.857 503.75 508.483 505 497.858L512 439.61L457 344.363ZM488.735 265.681C500.009 250.244 494.844 228.239 478.133 218.956L478.06 218.915C464.067 211.141 446.497 214.951 437.063 227.883C395.19 285.28 328.05 319.989 256 319.989C232.125 319.989 208.75 315.739 186.625 308.489L254 191.743H258L309.125 280.24C340.375 271.366 368.625 254.491 391.75 231.367L340 141.62C350.751 121.758 355.659 98.176 348.912 72.425C339.215 35.416 307.414 6.101 269.507 0.925C210.504 -7.132 160 38.56 160 95.997C160 112.621 164.625 127.996 172 141.62L103.75 259.991C94.378 251.276 85.569 241.787 77.69 231.526C67.82 218.671 50.242 214.751 36.229 222.893L36.229 222.893C19.703 232.496 14.775 254.648 26.422 269.803C39.672 287.042 54.826 302.425 71.25 316.239L0 439.61L7.006 497.912C8.283 508.538 19.415 514.954 29.25 510.733L83.125 487.608L154 364.988C186.125 377.237 220.625 383.987 256 383.987C348.557 383.987 434.886 339.411 488.735 265.681ZM256 63.998C273.625 63.998 288 78.372 288 95.997S273.625 127.996 256 127.996C238.375 127.996 224 113.621 224 95.997S238.375 63.998 256 63.998Z" })
  }
));
CompassDraftingSolid.displayName = "CompassDraftingSolid";
var CompassDrafting_default = CompassDraftingSolid;
