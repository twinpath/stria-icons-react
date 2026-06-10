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
const BookSectionRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M424 400C437 400 448 389 448 376V24C448 11 437 0 424 0H80C36 0 0 36 0 80V432C0 476 36 512 80 512H424C437 512 448 501 448 488S437 464 424 464H416V400H424ZM368 464H80C62 464 48 450 48 432S62 400 80 400H368V464ZM400 352H80C69 352 58 354 48 359V80C48 62 62 48 80 48H400V352ZM229 287C219 286 208 282 198 279L193 277C184 274 175 279 173 287C170 296 175 305 183 307L188 309C199 313 212 317 225 319C231 320 237 320 243 320C278 320 302 305 307 279C311 260 304 247 292 238C300 231 305 223 307 212C315 169 272 158 244 151L237 149C204 141 203 135 204 127C207 115 226 110 251 113C259 114 268 117 274 119C283 121 292 117 294 108C297 100 292 91 284 88C272 85 263 82 256 81C211 75 179 91 173 121C169 141 177 153 188 162C180 169 175 177 173 188C165 230 208 242 229 247L236 249C272 258 278 263 276 273C273 285 254 290 229 287ZM276 206C274 216 261 219 253 220C250 220 247 219 244 218L237 216C204 207 203 202 204 194C206 184 219 181 227 180C227 180 228 180 229 180L236 182C272 191 278 196 276 206Z" })
  }
));
BookSectionRegular.displayName = "BookSectionRegular";
var BookSection_default = BookSectionRegular;
