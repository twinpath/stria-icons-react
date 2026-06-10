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
var ListTree_exports = {};
__export(ListTree_exports, {
  default: () => ListTree_default
});
module.exports = __toCommonJS(ListTree_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ListTreeThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M504 248H296C291.578 248 288 251.578 288 256S291.578 264 296 264H504C508.422 264 512 260.422 512 256S508.422 248 504 248ZM168 104H504C508.422 104 512 100.422 512 96S508.422 88 504 88H168C163.578 88 160 91.578 160 96S163.578 104 168 104ZM200 208H152C138.75 208 128 218.75 128 232V248H56V144H72C85.25 144 96 133.25 96 120V72C96 58.75 85.25 48 72 48H24C10.75 48 0 58.75 0 72V120C0 133.25 10.75 144 24 144H40V384C40 406.062 57.938 424 80 424H128V440C128 453.25 138.75 464 152 464H200C213.25 464 224 453.25 224 440V392C224 378.75 213.25 368 200 368H152C138.75 368 128 378.75 128 392V408H80C66.766 408 56 397.219 56 384V264H128V280C128 293.25 138.75 304 152 304H200C213.25 304 224 293.25 224 280V232C224 218.75 213.25 208 200 208ZM144 392C144 387.562 147.578 384 152 384H200C204.422 384 208 387.562 208 392V440C208 444.438 204.422 448 200 448H152C147.578 448 144 444.438 144 440V392ZM24 128C19.578 128 16 124.422 16 120V72C16 67.578 19.578 64 24 64H72C76.422 64 80 67.578 80 72V120C80 124.422 76.422 128 72 128H24ZM208 280C208 284.422 204.422 288 200 288H152C147.578 288 144 284.422 144 280V232C144 227.578 147.578 224 152 224H200C204.422 224 208 227.578 208 232V280ZM504 408H296C291.578 408 288 411.562 288 416S291.578 424 296 424H504C508.422 424 512 420.438 512 416S508.422 408 504 408Z" })
  }
));
ListTreeThin.displayName = "ListTreeThin";
var ListTree_default = ListTreeThin;
