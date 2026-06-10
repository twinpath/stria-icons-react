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
var ListRadio_exports = {};
__export(ListRadio_exports, {
  default: () => ListRadio_default
});
module.exports = __toCommonJS(ListRadio_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ListRadioThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M504 248H168C163.578 248 160 251.578 160 256S163.578 264 168 264H504C508.422 264 512 260.422 512 256S508.422 248 504 248ZM168 104H504C508.422 104 512 100.422 512 96S508.422 88 504 88H168C163.578 88 160 91.578 160 96S163.578 104 168 104ZM504 408H168C163.578 408 160 411.578 160 416S163.578 424 168 424H504C508.422 424 512 420.422 512 416S508.422 408 504 408ZM64 32C28.654 32 0 60.652 0 96C0 131.346 28.654 160 64 160C99.348 160 128 131.346 128 96C128 60.652 99.348 32 64 32ZM64 144C37.533 144 16 122.467 16 96S37.533 48 64 48S112 69.533 112 96S90.467 144 64 144ZM64 80C55.164 80 48 87.162 48 96C48 104.836 55.164 112 64 112C72.838 112 80 104.836 80 96C80 87.162 72.838 80 64 80ZM64 192C28.654 192 0 220.654 0 256S28.654 320 64 320C99.348 320 128 291.346 128 256S99.348 192 64 192ZM64 304C37.533 304 16 282.467 16 256S37.533 208 64 208S112 229.533 112 256S90.467 304 64 304ZM64 352C28.654 352 0 380.654 0 416S28.654 480 64 480C99.348 480 128 451.346 128 416S99.348 352 64 352ZM64 464C37.533 464 16 442.467 16 416S37.533 368 64 368S112 389.533 112 416S90.467 464 64 464Z" })
  }
));
ListRadioThin.displayName = "ListRadioThin";
var ListRadio_default = ListRadioThin;
