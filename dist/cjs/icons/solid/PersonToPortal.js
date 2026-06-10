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
var PersonToPortal_exports = {};
__export(PersonToPortal_exports, {
  default: () => PersonToPortal_default
});
module.exports = __toCommonJS(PersonToPortal_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PersonToPortalSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432 0C391.25 0 357.625 97.75 352.75 224H340L313.875 170.75C301.375 145.25 278.5 126.5 252.125 119.75L181 98.625C152.875 91.875 123.125 98.125 100.25 115.75L60.5 146.25C46.5 157 43.875 177 54.625 191.125C65.375 205.125 85.5 207.75 99.5 197L139.125 166.625C146.875 160.625 156.625 158.625 164.375 160.375L179.125 164.75L141.75 252.25C129.125 281.75 140.375 316.125 168 332.5L253 382.75L225.5 470.375C220.25 487.25 229.625 505.25 246.5 510.5C263.375 515.75 281.25 506.375 286.5 489.5L318.25 388.5C324.125 367.5 315.25 345.25 296.5 334.125L235.25 298L266.625 219.625L286.875 261.125C295 277.5 311.75 287.875 330 288H352.75C357.625 414.25 391.25 512 432 512C476.125 512 512 397.375 512 256S476.125 0 432 0ZM272 96C298.5 96 320 74.5 320 48S298.5 0 272 0S224 21.5 224 48S245.5 96 272 96ZM113.75 317.5L98.875 352H32C14.375 352 0 366.25 0 384C0 401.625 14.375 416 32 416H109.5C128.625 416 146 404.625 153.5 386.875L162.375 366.375L151.75 360.125C135 350.125 121.75 335.25 113.625 317.5H113.75Z" })
  }
));
PersonToPortalSolid.displayName = "PersonToPortalSolid";
var PersonToPortal_default = PersonToPortalSolid;
