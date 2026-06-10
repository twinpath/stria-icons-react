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
var Shovel_exports = {};
__export(Shovel_exports, {
  default: () => Shovel_default
});
module.exports = __toCommonJS(Shovel_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShovelThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M509.657 87.891L424.047 2.25C421.047 -0.75 415.735 -0.75 412.735 2.25L378.36 36.693C365.422 49.604 358.282 66.824 358.282 85.141C358.282 100.729 363.725 115.35 373.25 127.367L214.34 286.307L152.112 224.068C145.862 217.814 137.674 214.688 129.485 214.688C121.297 214.688 113.108 217.814 106.858 224.068L38.973 291.963C-11.033 341.977 -6.283 473.02 16.346 495.652C26.221 505.529 56.739 512 92.157 512C137.897 512 191.813 501.209 219.996 473.02L287.879 405.121C300.381 392.619 300.381 372.365 287.879 359.859L225.653 297.621L384.586 138.658C396.344 147.816 411.213 153.184 426.828 153.184C445.235 153.184 462.875 146.059 475.235 133.619L509.657 99.205C511.157 97.705 512 95.674 512 93.549S511.157 89.391 509.657 87.891ZM276.565 371.174C279.59 374.199 281.256 378.219 281.256 382.492C281.256 386.762 279.59 390.781 276.565 393.805L208.684 461.703C183.403 486.988 131.912 495.996 92.157 495.996C52.623 495.996 31.313 487.99 27.661 484.338C22.69 479.365 13.989 450.084 16.399 404.93C18.793 360.107 31.461 322.107 50.287 303.277L118.174 235.381C121.198 232.357 125.213 230.691 129.485 230.691S137.774 232.357 140.799 235.383L276.565 371.174ZM463.922 122.303C463.922 122.303 463.907 122.303 463.907 122.334C445.125 141.213 408.485 141.213 389.703 122.303C379.75 112.396 374.282 99.174 374.282 85.141S379.75 57.916 389.672 48.01L418.391 19.223L492.688 93.549L463.922 122.303Z" })
  }
));
ShovelThin.displayName = "ShovelThin";
var Shovel_default = ShovelThin;
