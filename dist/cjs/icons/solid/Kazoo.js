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
var Kazoo_exports = {};
__export(Kazoo_exports, {
  default: () => Kazoo_default
});
module.exports = __toCommonJS(Kazoo_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const KazooSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M608 128H512.625C493.125 118.125 471.375 112 448 112S402.875 118.125 383.375 128H241.875C230 128 218.25 129.625 206.75 132.875L23.25 185.375C9.5 189.25 0 201.875 0 216.125V295.875C0 310.125 9.5 322.75 23.25 326.625L206.75 379.125C218.25 382.375 230 384 241.875 384H383.375C402.875 393.875 424.625 400 448 400S493.125 393.875 512.625 384H608C625.625 384 640 369.625 640 352V160C640 142.375 625.625 128 608 128ZM448 352C395 352 352 309 352 256S395 160 448 160S544 203 544 256S501 352 448 352ZM498.875 216.375L487.625 205.125C486.125 203.625 484.125 202.75 482 202.75C479.875 202.75 477.75 203.625 476.25 205.125L448 233.375L419.75 205.125C416.625 202 411.5 202 408.375 205.125L397.125 216.375C394 219.5 394 224.625 397.125 227.75L425.375 256L397.125 284.25C395.625 285.75 394.75 287.875 394.75 290C394.75 292.125 395.625 294.125 397.125 295.625L408.375 306.875C411.5 310 416.625 310 419.75 306.875L448 278.625L476.25 306.875C477.75 308.375 479.875 309.25 482 309.25C484.125 309.25 486.125 308.375 487.625 306.875L498.875 295.625C500.375 294.125 501.25 292.125 501.25 290C501.25 287.875 500.375 285.75 498.875 284.25L470.625 256L498.875 227.75C502 224.625 502 219.5 498.875 216.375Z" })
  }
));
KazooSolid.displayName = "KazooSolid";
var Kazoo_default = KazooSolid;
