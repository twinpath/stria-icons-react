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
const KazooLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M608 128H480.625C461.125 118.125 439.375 112 416 112S370.875 118.125 351.375 128H241.875C230 128 218.25 129.625 206.75 132.875L23.25 185.375C9.5 189.25 0 201.875 0 216.125V295.875C0 310.125 9.5 322.75 23.25 326.625L206.75 379.125C218.25 382.375 230 384 241.875 384H351.375C370.875 393.875 392.625 400 416 400S461.125 393.875 480.625 384H608C625.625 384 640 369.625 640 352V160C640 142.375 625.625 128 608 128ZM241.875 352C233 352 224.125 350.75 215.5 348.25L32 295.875V216.125L215.5 163.75C224.125 161.25 233 160 241.875 160H308.75C259.75 214.625 259.75 297.375 308.75 352H241.875ZM416 368C354.125 368 304 317.875 304 256S354.125 144 416 144S528 194.125 528 256C527.875 317.875 477.875 367.875 416 368ZM608 352H523.25C572.25 297.375 572.25 214.625 523.25 160H608V352ZM467.312 204.688C461.062 198.438 450.937 198.438 444.688 204.688L416 233.375L387.312 204.688C381.062 198.438 370.937 198.438 364.688 204.688S358.438 221.063 364.688 227.312L393.375 256L364.688 284.688C358.438 290.938 358.438 301.063 364.688 307.312C367.812 310.438 371.906 312 376 312S384.188 310.438 387.312 307.312L416 278.625L444.688 307.312C447.812 310.438 451.906 312 456 312S464.188 310.438 467.312 307.312C473.562 301.062 473.562 290.937 467.312 284.688L438.625 256L467.312 227.312C473.562 221.062 473.562 210.938 467.312 204.688Z" })
  }
));
KazooLight.displayName = "KazooLight";
var Kazoo_default = KazooLight;
