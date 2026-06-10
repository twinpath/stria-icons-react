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
var TimelineArrow_exports = {};
__export(TimelineArrow_exports, {
  default: () => TimelineArrow_default
});
module.exports = __toCommonJS(TimelineArrow_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TimelineArrowSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M627.188 230.406L531.188 158.406C517.063 147.781 497 150.688 486.406 164.797C475.781 178.937 478.656 199 492.812 209.594L512.012 224H384V153.246C412.232 140.891 432 112.785 432 80C432 35.82 396.184 0 352 0C307.818 0 272 35.82 272 80C272 112.785 291.771 140.891 320 153.246V224H160V153.246C188.232 140.891 208 112.785 208 80C208 35.82 172.184 0 128 0C83.818 0 48 35.82 48 80C48 112.785 67.771 140.891 96 153.246V224H32C14.334 224 0 238.334 0 256S14.334 288 32 288H192V358.754C163.768 371.109 144 399.215 144 432C144 476.18 179.816 512 224 512C268.182 512 304 476.18 304 432C304 399.215 284.229 371.109 256 358.754V288H512.012L492.812 302.406C478.656 313 475.781 333.062 486.406 347.203C492.688 355.578 502.281 360 512.031 360C518.719 360 525.438 357.922 531.188 353.594L627.188 281.594C635.25 275.562 640 266.078 640 256S635.25 236.438 627.188 230.406ZM352 48C369.645 48 384 62.355 384 80S369.645 112 352 112S320 97.645 320 80S334.355 48 352 48ZM128 48C145.645 48 160 62.355 160 80S145.645 112 128 112S96 97.645 96 80S110.355 48 128 48ZM224 464C206.355 464 192 449.645 192 432S206.355 400 224 400S256 414.355 256 432S241.645 464 224 464Z" })
  }
));
TimelineArrowSolid.displayName = "TimelineArrowSolid";
var TimelineArrow_default = TimelineArrowSolid;
