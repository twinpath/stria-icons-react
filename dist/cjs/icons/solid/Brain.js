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
var Brain_exports = {};
__export(Brain_exports, {
  default: () => Brain_default
});
module.exports = __toCommonJS(Brain_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BrainSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M184 0C155.102 0 131.594 21.975 128.598 50.078C100.732 57 80 81.992 80 112C80 118.27 81.184 124.207 82.863 129.934C53.896 136.018 32 161.217 32 192C32 207.098 37.445 220.789 46.191 231.734C18.973 244.5 0 271.947 0 304C0 338.262 21.643 367.264 51.92 378.662C49.537 385.365 48 392.479 48 400C48 435.346 76.654 464 112 464C117.766 464 123.246 462.992 128.561 461.562C131.391 489.838 154.979 512 184 512C214.928 512 240 486.928 240 456V56C240 25.072 214.928 0 184 0ZM512 304C512 271.947 493.027 244.5 465.809 231.734C474.555 220.789 480 207.098 480 192C480 161.217 458.104 136.018 429.137 129.934C430.816 124.207 432 118.27 432 112C432 81.992 411.268 57 383.402 50.078C380.406 21.975 356.898 0 328 0C297.072 0 272 25.072 272 56V456C272 486.928 297.072 512 328 512C357.021 512 380.609 489.838 383.439 461.562C388.754 462.992 394.234 464 400 464C435.346 464 464 435.346 464 400C464 392.479 462.463 385.365 460.08 378.662C490.357 367.264 512 338.262 512 304Z" })
  }
));
BrainSolid.displayName = "BrainSolid";
var Brain_default = BrainSolid;
