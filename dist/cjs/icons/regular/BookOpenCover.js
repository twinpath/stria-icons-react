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
const BookOpenCoverRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M600.238 32.969L592 35.031V403.156L320 463.609L48 403.156V35.031L39.762 32.969C19.564 27.922 0 43.195 0 64.012V416C0 431 10.418 443.984 25.059 447.242L313.059 511.238C317.631 512.254 322.369 512.254 326.941 511.238L614.941 447.242C629.582 443.984 640 431 640 416V64.012C640 43.195 620.436 27.922 600.238 32.969ZM97.969 375.219L313.969 431.219C315.938 431.75 317.969 432 320 432S324.062 431.75 326.031 431.219L542.031 375.219C552.594 372.5 560 362.938 560 352V24C560 16.875 556.844 10.094 551.344 5.562C545.844 1 538.688 -0.906 531.625 0.406L320 39.594L108.375 0.406C101.344 -0.906 94.156 1 88.656 5.562C83.156 10.094 80 16.875 80 24V352C80 362.938 87.406 372.5 97.969 375.219ZM344 83.961L512 52.844V333.438L344 376.996V83.961ZM128 52.844L296 83.961V376.996L128 333.438V52.844Z" })
  }
));
BookOpenCoverRegular.displayName = "BookOpenCoverRegular";
var BookOpenCover_default = BookOpenCoverRegular;
