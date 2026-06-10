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
var FilmCanister_exports = {};
__export(FilmCanister_exports, {
  default: () => FilmCanister_default
});
module.exports = __toCommonJS(FilmCanister_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FilmCanisterDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 448H32V96H320V448Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M544 128H320V416H480C497.625 416 512 401.625 512 384V352C512 334.375 526.375 320 544 320S576 305.625 576 288V160C576 142.375 561.625 128 544 128ZM440 360C440 368.875 432.875 376 424 376H408C399.125 376 392 368.875 392 360V344C392 335.125 399.125 328 408 328H424C432.875 328 440 335.125 440 344V360ZM440 200C440 208.875 432.875 216 424 216H408C399.125 216 392 208.875 392 200V184C392 175.125 399.125 168 408 168H424C432.875 168 440 175.125 440 184V200ZM536 200C536 208.875 528.875 216 520 216H504C495.125 216 488 208.875 488 200V184C488 175.125 495.125 168 504 168H520C528.875 168 536 175.125 536 184V200ZM16 96H336C344.875 96 352 88.875 352 80V48C352 39.125 344.875 32 336 32H256V16C256 7.125 248.875 0 240 0H112C103.125 0 96 7.125 96 16V32H16C7.125 32 0 39.125 0 48V80C0 88.875 7.125 96 16 96ZM336 448H16C7.125 448 0 455.125 0 464V496C0 504.875 7.125 512 16 512H336C344.875 512 352 504.875 352 496V464C352 455.125 344.875 448 336 448Z" })
    ]
  }
));
FilmCanisterDuotone.displayName = "FilmCanisterDuotone";
var FilmCanister_default = FilmCanisterDuotone;
