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
const BookSectionLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 368V48C448 22 426 0 400 0H80C36 0 0 36 0 80V448C0 483 29 512 64 512H432C441 512 448 505 448 496S441 480 432 480H416V413C435 406 448 389 448 368ZM384 480H64C46 480 32 466 32 448S46 416 64 416H384V480ZM400 384H64C52 384 41 387 32 393V80C32 54 54 32 80 32H400C409 32 416 39 416 48V368C416 377 409 384 400 384ZM298 254C309 246 316 236 319 223C328 173 280 161 244 151L236 149C196 138 190 131 193 117C196 98 227 93 254 97C262 98 271 101 283 105C292 107 301 102 303 94C306 86 301 77 293 74C279 70 268 67 259 66C206 58 168 76 161 111C156 136 167 151 182 162C171 170 164 180 161 193C152 242 201 255 227 262L236 265C278 275 291 282 287 299C284 318 253 323 226 319C214 317 200 312 187 308L181 306C172 304 163 308 161 317C158 325 163 334 171 337L178 339C191 343 207 348 221 350C229 351 237 352 244 352C285 352 313 335 319 305C324 280 314 265 298 254ZM287 217C285 231 267 236 256 237C252 236 248 235 244 234L236 231C196 221 190 213 193 199C195 185 213 180 224 179C225 179 226 180 227 180L236 182C277 193 291 200 287 217Z" })
  }
));
BookSectionLight.displayName = "BookSectionLight";
var BookSection_default = BookSectionLight;
