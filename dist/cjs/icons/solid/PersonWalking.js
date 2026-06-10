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
var PersonWalking_exports = {};
__export(PersonWalking_exports, {
  default: () => PersonWalking_default
});
module.exports = __toCommonJS(PersonWalking_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PersonWalkingSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M208 96C234.5 96 256 74.5 256 48S234.5 0 208 0S160 21.5 160 48S181.5 96 208 96ZM73.61 385.656C70.36 393.781 65.612 401.152 59.362 407.148L9.374 457.266C-3.125 469.758 -3.125 490.129 9.374 502.625C21.872 515.125 42.116 515.125 54.614 502.625L113.975 443.141C120.1 437.141 124.848 429.77 128.223 421.648L141.719 387.906C86.356 327.672 102.977 346.164 94.229 334.168L73.61 385.656ZM302.434 245.141L279.19 233.266L269.442 203.887C254.694 159.258 213.704 128.125 167.213 128C131.221 127.875 111.352 138.125 73.985 153.254C52.364 161.883 34.743 178.383 24.245 199.383L17.622 213.012C9.749 228.766 16.122 248.016 31.743 255.895C47.366 263.77 66.362 257.395 74.235 241.641L80.983 228.016C84.483 221.016 90.231 215.516 97.479 212.637L124.223 201.762L109.102 262.52C103.852 283.273 109.477 305.398 123.973 321.277L183.834 386.789C191.084 394.664 196.208 404.164 198.708 414.414L217.079 487.801C221.327 504.805 238.698 515.305 255.819 511.055S283.438 489.301 279.19 472.297L256.944 383.289C254.319 372.91 249.196 363.281 242.073 355.531L196.583 305.773L213.704 237.141L219.202 253.641C224.577 269.773 235.95 283.023 250.946 290.648L274.19 302.398C289.813 310.273 308.807 303.898 316.682 288.148C324.43 272.398 318.18 253.016 302.434 245.141Z" })
  }
));
PersonWalkingSolid.displayName = "PersonWalkingSolid";
var PersonWalking_default = PersonWalkingSolid;
