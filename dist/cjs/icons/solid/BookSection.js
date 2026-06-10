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
var BookSection_exports = {};
__export(BookSection_exports, {
  default: () => BookSection_default
});
module.exports = __toCommonJS(BookSection_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BookSectionSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 360V24C448 11 437 0 424 0H96C43 0 0 43 0 96V416C0 469 43 512 96 512H424C437 512 448 501 448 488V472C448 462 441 453 432 450V382C441 379 448 370 448 360ZM236 243L228 241C206 235 160 223 169 179C171 167 177 158 186 151C173 142 165 128 169 107C175 75 209 59 257 65C265 66 274 69 287 73C295 75 300 84 297 93C295 101 286 106 277 103C267 100 259 98 252 97C224 93 203 99 200 113C199 122 200 129 237 138L244 140C274 148 320 160 311 205C309 216 303 225 294 233C307 242 315 256 311 277C306 304 280 320 244 320C237 320 231 319 223 318C211 317 197 312 185 308L179 306C171 304 166 295 169 286C171 278 180 273 189 276L195 278C206 281 218 285 228 287C256 291 277 284 280 271C282 258 274 253 236 243ZM384 448H96C78 448 64 434 64 416C64 398 78 384 96 384H384V448Z" })
  }
));
BookSectionSolid.displayName = "BookSectionSolid";
var BookSection_default = BookSectionSolid;
